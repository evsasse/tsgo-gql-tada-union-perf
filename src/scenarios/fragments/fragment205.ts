import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken203 } from "./fragment203";
import type { FragmentToken204 } from "./fragment204";

export const FRAGMENT_205 = gql(`
  fragment Fragment205 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult205 = ResultOf<typeof FRAGMENT_205>;
type FragmentSelf205 = NonNullable<FragmentResult205>;

export type FragmentToken205 =
  | FragmentSelf205["__typename"]
  | FragmentSelf205["typenameHint"] | FragmentToken203 | FragmentToken204;
