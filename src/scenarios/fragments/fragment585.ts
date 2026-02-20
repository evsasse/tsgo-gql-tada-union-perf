import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken583 } from "./fragment583";
import type { FragmentToken584 } from "./fragment584";

export const FRAGMENT_585 = gql(`
  fragment Fragment585 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult585 = ResultOf<typeof FRAGMENT_585>;
type FragmentSelf585 = NonNullable<FragmentResult585>;

export type FragmentToken585 =
  | FragmentSelf585["__typename"]
  | FragmentSelf585["typenameHint"] | FragmentToken583 | FragmentToken584;
