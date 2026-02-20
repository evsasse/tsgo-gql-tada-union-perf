import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3134 } from "./fragment3134";
import type { FragmentToken3135 } from "./fragment3135";

export const FRAGMENT_3136 = gql(`
  fragment Fragment3136 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult3136 = ResultOf<typeof FRAGMENT_3136>;
type FragmentSelf3136 = NonNullable<FragmentResult3136>;

export type FragmentToken3136 =
  | FragmentSelf3136["__typename"]
  | FragmentSelf3136["typenameHint"] | FragmentToken3134 | FragmentToken3135;
