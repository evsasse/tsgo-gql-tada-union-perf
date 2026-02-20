import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken518 } from "./fragment518";
import type { FragmentToken519 } from "./fragment519";

export const FRAGMENT_520 = gql(`
  fragment Fragment520 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult520 = ResultOf<typeof FRAGMENT_520>;
type FragmentSelf520 = NonNullable<FragmentResult520>;

export type FragmentToken520 =
  | FragmentSelf520["__typename"]
  | FragmentSelf520["typenameHint"] | FragmentToken518 | FragmentToken519;
