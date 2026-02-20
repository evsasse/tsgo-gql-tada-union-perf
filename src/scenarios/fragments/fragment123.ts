import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken121 } from "./fragment121";
import type { FragmentToken122 } from "./fragment122";

export const FRAGMENT_123 = gql(`
  fragment Fragment123 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult123 = ResultOf<typeof FRAGMENT_123>;
type FragmentSelf123 = NonNullable<FragmentResult123>;

export type FragmentToken123 =
  | FragmentSelf123["__typename"]
  | FragmentSelf123["typenameHint"] | FragmentToken121 | FragmentToken122;
