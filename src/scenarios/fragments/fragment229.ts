import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken227 } from "./fragment227";
import type { FragmentToken228 } from "./fragment228";

export const FRAGMENT_229 = gql(`
  fragment Fragment229 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult229 = ResultOf<typeof FRAGMENT_229>;
type FragmentSelf229 = NonNullable<FragmentResult229>;

export type FragmentToken229 =
  | FragmentSelf229["__typename"]
  | FragmentSelf229["typenameHint"] | FragmentToken227 | FragmentToken228;
