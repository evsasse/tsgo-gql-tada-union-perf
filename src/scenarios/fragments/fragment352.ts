import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken350 } from "./fragment350";
import type { FragmentToken351 } from "./fragment351";

export const FRAGMENT_352 = gql(`
  fragment Fragment352 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult352 = ResultOf<typeof FRAGMENT_352>;
type FragmentSelf352 = NonNullable<FragmentResult352>;

export type FragmentToken352 =
  | FragmentSelf352["__typename"]
  | FragmentSelf352["typenameHint"] | FragmentToken350 | FragmentToken351;
