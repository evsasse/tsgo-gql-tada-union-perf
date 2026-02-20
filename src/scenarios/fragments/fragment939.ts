import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken937 } from "./fragment937";
import type { FragmentToken938 } from "./fragment938";

export const FRAGMENT_939 = gql(`
  fragment Fragment939 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult939 = ResultOf<typeof FRAGMENT_939>;
type FragmentSelf939 = NonNullable<FragmentResult939>;

export type FragmentToken939 =
  | FragmentSelf939["__typename"]
  | FragmentSelf939["typenameHint"] | FragmentToken937 | FragmentToken938;
