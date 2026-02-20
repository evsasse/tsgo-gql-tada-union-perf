import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken228 } from "./fragment228";
import type { FragmentToken229 } from "./fragment229";

export const FRAGMENT_230 = gql(`
  fragment Fragment230 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult230 = ResultOf<typeof FRAGMENT_230>;
type FragmentSelf230 = NonNullable<FragmentResult230>;

export type FragmentToken230 =
  | FragmentSelf230["__typename"]
  | FragmentSelf230["typenameHint"] | FragmentToken228 | FragmentToken229;
