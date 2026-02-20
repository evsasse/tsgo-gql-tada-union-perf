import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken502 } from "./fragment502";
import type { FragmentToken503 } from "./fragment503";

export const FRAGMENT_504 = gql(`
  fragment Fragment504 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult504 = ResultOf<typeof FRAGMENT_504>;
type FragmentSelf504 = NonNullable<FragmentResult504>;

export type FragmentToken504 =
  | FragmentSelf504["__typename"]
  | FragmentSelf504["typenameHint"] | FragmentToken502 | FragmentToken503;
