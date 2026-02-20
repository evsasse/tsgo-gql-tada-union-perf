import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken262 } from "./fragment262";
import type { FragmentToken263 } from "./fragment263";

export const FRAGMENT_264 = gql(`
  fragment Fragment264 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult264 = ResultOf<typeof FRAGMENT_264>;
type FragmentSelf264 = NonNullable<FragmentResult264>;

export type FragmentToken264 =
  | FragmentSelf264["__typename"]
  | FragmentSelf264["typenameHint"] | FragmentToken262 | FragmentToken263;
