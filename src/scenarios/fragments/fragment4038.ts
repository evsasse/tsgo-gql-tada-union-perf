import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4036 } from "./fragment4036";
import type { FragmentToken4037 } from "./fragment4037";

export const FRAGMENT_4038 = gql(`
  fragment Fragment4038 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult4038 = ResultOf<typeof FRAGMENT_4038>;
type FragmentSelf4038 = NonNullable<FragmentResult4038>;

export type FragmentToken4038 =
  | FragmentSelf4038["__typename"]
  | FragmentSelf4038["typenameHint"] | FragmentToken4036 | FragmentToken4037;
