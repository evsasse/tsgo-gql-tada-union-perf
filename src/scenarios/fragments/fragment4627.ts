import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4625 } from "./fragment4625";
import type { FragmentToken4626 } from "./fragment4626";

export const FRAGMENT_4627 = gql(`
  fragment Fragment4627 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult4627 = ResultOf<typeof FRAGMENT_4627>;
type FragmentSelf4627 = NonNullable<FragmentResult4627>;

export type FragmentToken4627 =
  | FragmentSelf4627["__typename"]
  | FragmentSelf4627["typenameHint"] | FragmentToken4625 | FragmentToken4626;
