import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken816 } from "./fragment816";
import type { FragmentToken817 } from "./fragment817";

export const FRAGMENT_818 = gql(`
  fragment Fragment818 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult818 = ResultOf<typeof FRAGMENT_818>;
type FragmentSelf818 = NonNullable<FragmentResult818>;

export type FragmentToken818 =
  | FragmentSelf818["__typename"]
  | FragmentSelf818["typenameHint"] | FragmentToken816 | FragmentToken817;
