import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken916 } from "./fragment916";
import type { FragmentToken917 } from "./fragment917";

export const FRAGMENT_918 = gql(`
  fragment Fragment918 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult918 = ResultOf<typeof FRAGMENT_918>;
type FragmentSelf918 = NonNullable<FragmentResult918>;

export type FragmentToken918 =
  | FragmentSelf918["__typename"]
  | FragmentSelf918["typenameHint"] | FragmentToken916 | FragmentToken917;
