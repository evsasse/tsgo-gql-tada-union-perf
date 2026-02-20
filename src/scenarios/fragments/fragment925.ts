import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken923 } from "./fragment923";
import type { FragmentToken924 } from "./fragment924";

export const FRAGMENT_925 = gql(`
  fragment Fragment925 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult925 = ResultOf<typeof FRAGMENT_925>;
type FragmentSelf925 = NonNullable<FragmentResult925>;

export type FragmentToken925 =
  | FragmentSelf925["__typename"]
  | FragmentSelf925["typenameHint"] | FragmentToken923 | FragmentToken924;
