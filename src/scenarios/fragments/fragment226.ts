import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken224 } from "./fragment224";
import type { FragmentToken225 } from "./fragment225";

export const FRAGMENT_226 = gql(`
  fragment Fragment226 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult226 = ResultOf<typeof FRAGMENT_226>;
type FragmentSelf226 = NonNullable<FragmentResult226>;

export type FragmentToken226 =
  | FragmentSelf226["__typename"]
  | FragmentSelf226["typenameHint"] | FragmentToken224 | FragmentToken225;
