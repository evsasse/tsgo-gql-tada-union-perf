import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken289 } from "./fragment289";
import type { FragmentToken290 } from "./fragment290";

export const FRAGMENT_291 = gql(`
  fragment Fragment291 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult291 = ResultOf<typeof FRAGMENT_291>;
type FragmentSelf291 = NonNullable<FragmentResult291>;

export type FragmentToken291 =
  | FragmentSelf291["__typename"]
  | FragmentSelf291["typenameHint"] | FragmentToken289 | FragmentToken290;
