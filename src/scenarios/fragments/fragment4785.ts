import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4783 } from "./fragment4783";
import type { FragmentToken4784 } from "./fragment4784";

export const FRAGMENT_4785 = gql(`
  fragment Fragment4785 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult4785 = ResultOf<typeof FRAGMENT_4785>;
type FragmentSelf4785 = NonNullable<FragmentResult4785>;

export type FragmentToken4785 =
  | FragmentSelf4785["__typename"]
  | FragmentSelf4785["typenameHint"] | FragmentToken4783 | FragmentToken4784;
