import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4526 } from "./fragment4526";
import type { FragmentToken4527 } from "./fragment4527";

export const FRAGMENT_4528 = gql(`
  fragment Fragment4528 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult4528 = ResultOf<typeof FRAGMENT_4528>;
type FragmentSelf4528 = NonNullable<FragmentResult4528>;

export type FragmentToken4528 =
  | FragmentSelf4528["__typename"]
  | FragmentSelf4528["typenameHint"] | FragmentToken4526 | FragmentToken4527;
