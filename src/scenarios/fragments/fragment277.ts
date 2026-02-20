import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken275 } from "./fragment275";
import type { FragmentToken276 } from "./fragment276";

export const FRAGMENT_277 = gql(`
  fragment Fragment277 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult277 = ResultOf<typeof FRAGMENT_277>;
type FragmentSelf277 = NonNullable<FragmentResult277>;

export type FragmentToken277 =
  | FragmentSelf277["__typename"]
  | FragmentSelf277["typenameHint"] | FragmentToken275 | FragmentToken276;
