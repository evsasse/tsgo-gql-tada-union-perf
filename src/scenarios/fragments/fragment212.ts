import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken210 } from "./fragment210";
import type { FragmentToken211 } from "./fragment211";

export const FRAGMENT_212 = gql(`
  fragment Fragment212 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult212 = ResultOf<typeof FRAGMENT_212>;
type FragmentSelf212 = NonNullable<FragmentResult212>;

export type FragmentToken212 =
  | FragmentSelf212["__typename"]
  | FragmentSelf212["typenameHint"] | FragmentToken210 | FragmentToken211;
