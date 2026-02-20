import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken863 } from "./fragment863";
import type { FragmentToken864 } from "./fragment864";

export const FRAGMENT_865 = gql(`
  fragment Fragment865 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult865 = ResultOf<typeof FRAGMENT_865>;
type FragmentSelf865 = NonNullable<FragmentResult865>;

export type FragmentToken865 =
  | FragmentSelf865["__typename"]
  | FragmentSelf865["typenameHint"] | FragmentToken863 | FragmentToken864;
