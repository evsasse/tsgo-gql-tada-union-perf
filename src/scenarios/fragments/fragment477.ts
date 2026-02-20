import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken475 } from "./fragment475";
import type { FragmentToken476 } from "./fragment476";

export const FRAGMENT_477 = gql(`
  fragment Fragment477 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult477 = ResultOf<typeof FRAGMENT_477>;
type FragmentSelf477 = NonNullable<FragmentResult477>;

export type FragmentToken477 =
  | FragmentSelf477["__typename"]
  | FragmentSelf477["typenameHint"] | FragmentToken475 | FragmentToken476;
