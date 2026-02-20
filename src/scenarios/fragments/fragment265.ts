import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken263 } from "./fragment263";
import type { FragmentToken264 } from "./fragment264";

export const FRAGMENT_265 = gql(`
  fragment Fragment265 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult265 = ResultOf<typeof FRAGMENT_265>;
type FragmentSelf265 = NonNullable<FragmentResult265>;

export type FragmentToken265 =
  | FragmentSelf265["__typename"]
  | FragmentSelf265["typenameHint"] | FragmentToken263 | FragmentToken264;
