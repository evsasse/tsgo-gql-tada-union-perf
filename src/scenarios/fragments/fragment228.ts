import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken226 } from "./fragment226";
import type { FragmentToken227 } from "./fragment227";

export const FRAGMENT_228 = gql(`
  fragment Fragment228 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult228 = ResultOf<typeof FRAGMENT_228>;
type FragmentSelf228 = NonNullable<FragmentResult228>;

export type FragmentToken228 =
  | FragmentSelf228["__typename"]
  | FragmentSelf228["typenameHint"] | FragmentToken226 | FragmentToken227;
