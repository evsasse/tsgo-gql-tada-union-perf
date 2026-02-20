import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken939 } from "./fragment939";
import type { FragmentToken940 } from "./fragment940";

export const FRAGMENT_941 = gql(`
  fragment Fragment941 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult941 = ResultOf<typeof FRAGMENT_941>;
type FragmentSelf941 = NonNullable<FragmentResult941>;

export type FragmentToken941 =
  | FragmentSelf941["__typename"]
  | FragmentSelf941["typenameHint"] | FragmentToken939 | FragmentToken940;
