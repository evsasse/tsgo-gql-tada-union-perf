import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4295 } from "./fragment4295";
import type { FragmentToken4296 } from "./fragment4296";

export const FRAGMENT_4297 = gql(`
  fragment Fragment4297 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult4297 = ResultOf<typeof FRAGMENT_4297>;
type FragmentSelf4297 = NonNullable<FragmentResult4297>;

export type FragmentToken4297 =
  | FragmentSelf4297["__typename"]
  | FragmentSelf4297["typenameHint"] | FragmentToken4295 | FragmentToken4296;
