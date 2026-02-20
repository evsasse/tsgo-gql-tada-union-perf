import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken032 } from "./fragment032";
import type { FragmentToken033 } from "./fragment033";

export const FRAGMENT_034 = gql(`
  fragment Fragment034 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult034 = ResultOf<typeof FRAGMENT_034>;
type FragmentSelf034 = NonNullable<FragmentResult034>;

export type FragmentToken034 =
  | FragmentSelf034["__typename"]
  | FragmentSelf034["typenameHint"] | FragmentToken032 | FragmentToken033;
