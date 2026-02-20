import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken865 } from "./fragment865";
import type { FragmentToken866 } from "./fragment866";

export const FRAGMENT_867 = gql(`
  fragment Fragment867 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult867 = ResultOf<typeof FRAGMENT_867>;
type FragmentSelf867 = NonNullable<FragmentResult867>;

export type FragmentToken867 =
  | FragmentSelf867["__typename"]
  | FragmentSelf867["typenameHint"] | FragmentToken865 | FragmentToken866;
