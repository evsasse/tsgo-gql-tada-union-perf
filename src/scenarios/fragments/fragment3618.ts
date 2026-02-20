import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3616 } from "./fragment3616";
import type { FragmentToken3617 } from "./fragment3617";

export const FRAGMENT_3618 = gql(`
  fragment Fragment3618 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult3618 = ResultOf<typeof FRAGMENT_3618>;
type FragmentSelf3618 = NonNullable<FragmentResult3618>;

export type FragmentToken3618 =
  | FragmentSelf3618["__typename"]
  | FragmentSelf3618["typenameHint"] | FragmentToken3616 | FragmentToken3617;
