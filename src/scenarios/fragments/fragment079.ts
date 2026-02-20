import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken077 } from "./fragment077";
import type { FragmentToken078 } from "./fragment078";

export const FRAGMENT_079 = gql(`
  fragment Fragment079 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult079 = ResultOf<typeof FRAGMENT_079>;
type FragmentSelf079 = NonNullable<FragmentResult079>;

export type FragmentToken079 =
  | FragmentSelf079["__typename"]
  | FragmentSelf079["typenameHint"] | FragmentToken077 | FragmentToken078;
