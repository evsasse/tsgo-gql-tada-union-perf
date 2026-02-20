import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken615 } from "./fragment615";
import type { FragmentToken616 } from "./fragment616";

export const FRAGMENT_617 = gql(`
  fragment Fragment617 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult617 = ResultOf<typeof FRAGMENT_617>;
type FragmentSelf617 = NonNullable<FragmentResult617>;

export type FragmentToken617 =
  | FragmentSelf617["__typename"]
  | FragmentSelf617["typenameHint"] | FragmentToken615 | FragmentToken616;
