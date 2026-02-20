import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken803 } from "./fragment803";
import type { FragmentToken804 } from "./fragment804";

export const FRAGMENT_805 = gql(`
  fragment Fragment805 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult805 = ResultOf<typeof FRAGMENT_805>;
type FragmentSelf805 = NonNullable<FragmentResult805>;

export type FragmentToken805 =
  | FragmentSelf805["__typename"]
  | FragmentSelf805["typenameHint"] | FragmentToken803 | FragmentToken804;
