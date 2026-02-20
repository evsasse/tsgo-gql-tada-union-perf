import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4118 } from "./fragment4118";
import type { FragmentToken4119 } from "./fragment4119";

export const FRAGMENT_4120 = gql(`
  fragment Fragment4120 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult4120 = ResultOf<typeof FRAGMENT_4120>;
type FragmentSelf4120 = NonNullable<FragmentResult4120>;

export type FragmentToken4120 =
  | FragmentSelf4120["__typename"]
  | FragmentSelf4120["typenameHint"] | FragmentToken4118 | FragmentToken4119;
