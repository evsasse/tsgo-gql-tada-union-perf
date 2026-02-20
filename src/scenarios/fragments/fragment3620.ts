import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3618 } from "./fragment3618";
import type { FragmentToken3619 } from "./fragment3619";

export const FRAGMENT_3620 = gql(`
  fragment Fragment3620 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult3620 = ResultOf<typeof FRAGMENT_3620>;
type FragmentSelf3620 = NonNullable<FragmentResult3620>;

export type FragmentToken3620 =
  | FragmentSelf3620["__typename"]
  | FragmentSelf3620["typenameHint"] | FragmentToken3618 | FragmentToken3619;
