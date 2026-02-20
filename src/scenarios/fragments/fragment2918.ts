import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2916 } from "./fragment2916";
import type { FragmentToken2917 } from "./fragment2917";

export const FRAGMENT_2918 = gql(`
  fragment Fragment2918 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult2918 = ResultOf<typeof FRAGMENT_2918>;
type FragmentSelf2918 = NonNullable<FragmentResult2918>;

export type FragmentToken2918 =
  | FragmentSelf2918["__typename"]
  | FragmentSelf2918["typenameHint"] | FragmentToken2916 | FragmentToken2917;
