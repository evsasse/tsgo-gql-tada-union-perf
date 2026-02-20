import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken851 } from "./fragment851";
import type { FragmentToken852 } from "./fragment852";

export const FRAGMENT_853 = gql(`
  fragment Fragment853 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult853 = ResultOf<typeof FRAGMENT_853>;
type FragmentSelf853 = NonNullable<FragmentResult853>;

export type FragmentToken853 =
  | FragmentSelf853["__typename"]
  | FragmentSelf853["typenameHint"] | FragmentToken851 | FragmentToken852;
