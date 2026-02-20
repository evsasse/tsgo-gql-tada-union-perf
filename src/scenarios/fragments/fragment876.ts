import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken874 } from "./fragment874";
import type { FragmentToken875 } from "./fragment875";

export const FRAGMENT_876 = gql(`
  fragment Fragment876 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult876 = ResultOf<typeof FRAGMENT_876>;
type FragmentSelf876 = NonNullable<FragmentResult876>;

export type FragmentToken876 =
  | FragmentSelf876["__typename"]
  | FragmentSelf876["typenameHint"] | FragmentToken874 | FragmentToken875;
