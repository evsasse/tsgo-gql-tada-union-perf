import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken728 } from "./fragment728";
import type { FragmentToken729 } from "./fragment729";

export const FRAGMENT_730 = gql(`
  fragment Fragment730 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult730 = ResultOf<typeof FRAGMENT_730>;
type FragmentSelf730 = NonNullable<FragmentResult730>;

export type FragmentToken730 =
  | FragmentSelf730["__typename"]
  | FragmentSelf730["typenameHint"] | FragmentToken728 | FragmentToken729;
