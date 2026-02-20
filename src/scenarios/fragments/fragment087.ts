import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken085 } from "./fragment085";
import type { FragmentToken086 } from "./fragment086";

export const FRAGMENT_087 = gql(`
  fragment Fragment087 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult087 = ResultOf<typeof FRAGMENT_087>;
type FragmentSelf087 = NonNullable<FragmentResult087>;

export type FragmentToken087 =
  | FragmentSelf087["__typename"]
  | FragmentSelf087["typenameHint"] | FragmentToken085 | FragmentToken086;
