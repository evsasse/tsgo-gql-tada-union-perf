import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4633 } from "./fragment4633";
import type { FragmentToken4634 } from "./fragment4634";

export const FRAGMENT_4635 = gql(`
  fragment Fragment4635 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult4635 = ResultOf<typeof FRAGMENT_4635>;
type FragmentSelf4635 = NonNullable<FragmentResult4635>;

export type FragmentToken4635 =
  | FragmentSelf4635["__typename"]
  | FragmentSelf4635["typenameHint"] | FragmentToken4633 | FragmentToken4634;
