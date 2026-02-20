import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3087 } from "./fragment3087";
import type { FragmentToken3088 } from "./fragment3088";

export const FRAGMENT_3089 = gql(`
  fragment Fragment3089 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult3089 = ResultOf<typeof FRAGMENT_3089>;
type FragmentSelf3089 = NonNullable<FragmentResult3089>;

export type FragmentToken3089 =
  | FragmentSelf3089["__typename"]
  | FragmentSelf3089["typenameHint"] | FragmentToken3087 | FragmentToken3088;
