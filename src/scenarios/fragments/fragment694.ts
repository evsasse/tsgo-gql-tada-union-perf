import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken692 } from "./fragment692";
import type { FragmentToken693 } from "./fragment693";

export const FRAGMENT_694 = gql(`
  fragment Fragment694 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult694 = ResultOf<typeof FRAGMENT_694>;
type FragmentSelf694 = NonNullable<FragmentResult694>;

export type FragmentToken694 =
  | FragmentSelf694["__typename"]
  | FragmentSelf694["typenameHint"] | FragmentToken692 | FragmentToken693;
