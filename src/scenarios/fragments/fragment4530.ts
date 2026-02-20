import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4528 } from "./fragment4528";
import type { FragmentToken4529 } from "./fragment4529";

export const FRAGMENT_4530 = gql(`
  fragment Fragment4530 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult4530 = ResultOf<typeof FRAGMENT_4530>;
type FragmentSelf4530 = NonNullable<FragmentResult4530>;

export type FragmentToken4530 =
  | FragmentSelf4530["__typename"]
  | FragmentSelf4530["typenameHint"] | FragmentToken4528 | FragmentToken4529;
