import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken213 } from "./fragment213";
import type { FragmentToken214 } from "./fragment214";

export const FRAGMENT_215 = gql(`
  fragment Fragment215 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult215 = ResultOf<typeof FRAGMENT_215>;
type FragmentSelf215 = NonNullable<FragmentResult215>;

export type FragmentToken215 =
  | FragmentSelf215["__typename"]
  | FragmentSelf215["typenameHint"] | FragmentToken213 | FragmentToken214;
