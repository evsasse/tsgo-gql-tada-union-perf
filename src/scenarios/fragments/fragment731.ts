import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken729 } from "./fragment729";
import type { FragmentToken730 } from "./fragment730";

export const FRAGMENT_731 = gql(`
  fragment Fragment731 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult731 = ResultOf<typeof FRAGMENT_731>;
type FragmentSelf731 = NonNullable<FragmentResult731>;

export type FragmentToken731 =
  | FragmentSelf731["__typename"]
  | FragmentSelf731["typenameHint"] | FragmentToken729 | FragmentToken730;
