import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken662 } from "./fragment662";
import type { FragmentToken663 } from "./fragment663";

export const FRAGMENT_664 = gql(`
  fragment Fragment664 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult664 = ResultOf<typeof FRAGMENT_664>;
type FragmentSelf664 = NonNullable<FragmentResult664>;

export type FragmentToken664 =
  | FragmentSelf664["__typename"]
  | FragmentSelf664["typenameHint"] | FragmentToken662 | FragmentToken663;
