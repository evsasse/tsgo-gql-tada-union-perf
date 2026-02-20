import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken068 } from "./fragment068";
import type { FragmentToken069 } from "./fragment069";

export const FRAGMENT_070 = gql(`
  fragment Fragment070 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult070 = ResultOf<typeof FRAGMENT_070>;
type FragmentSelf070 = NonNullable<FragmentResult070>;

export type FragmentToken070 =
  | FragmentSelf070["__typename"]
  | FragmentSelf070["typenameHint"] | FragmentToken068 | FragmentToken069;
