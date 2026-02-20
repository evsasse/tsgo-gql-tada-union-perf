import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken501 } from "./fragment501";
import type { FragmentToken502 } from "./fragment502";

export const FRAGMENT_503 = gql(`
  fragment Fragment503 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult503 = ResultOf<typeof FRAGMENT_503>;
type FragmentSelf503 = NonNullable<FragmentResult503>;

export type FragmentToken503 =
  | FragmentSelf503["__typename"]
  | FragmentSelf503["typenameHint"] | FragmentToken501 | FragmentToken502;
