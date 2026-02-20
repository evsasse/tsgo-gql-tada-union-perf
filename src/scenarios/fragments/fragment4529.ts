import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4527 } from "./fragment4527";
import type { FragmentToken4528 } from "./fragment4528";

export const FRAGMENT_4529 = gql(`
  fragment Fragment4529 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult4529 = ResultOf<typeof FRAGMENT_4529>;
type FragmentSelf4529 = NonNullable<FragmentResult4529>;

export type FragmentToken4529 =
  | FragmentSelf4529["__typename"]
  | FragmentSelf4529["typenameHint"] | FragmentToken4527 | FragmentToken4528;
