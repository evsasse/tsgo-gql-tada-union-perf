import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3017 } from "./fragment3017";
import type { FragmentToken3018 } from "./fragment3018";

export const FRAGMENT_3019 = gql(`
  fragment Fragment3019 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult3019 = ResultOf<typeof FRAGMENT_3019>;
type FragmentSelf3019 = NonNullable<FragmentResult3019>;

export type FragmentToken3019 =
  | FragmentSelf3019["__typename"]
  | FragmentSelf3019["typenameHint"] | FragmentToken3017 | FragmentToken3018;
