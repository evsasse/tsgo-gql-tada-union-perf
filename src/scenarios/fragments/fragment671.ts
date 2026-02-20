import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken669 } from "./fragment669";
import type { FragmentToken670 } from "./fragment670";

export const FRAGMENT_671 = gql(`
  fragment Fragment671 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult671 = ResultOf<typeof FRAGMENT_671>;
type FragmentSelf671 = NonNullable<FragmentResult671>;

export type FragmentToken671 =
  | FragmentSelf671["__typename"]
  | FragmentSelf671["typenameHint"] | FragmentToken669 | FragmentToken670;
