import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken326 } from "./fragment326";
import type { FragmentToken327 } from "./fragment327";

export const FRAGMENT_328 = gql(`
  fragment Fragment328 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult328 = ResultOf<typeof FRAGMENT_328>;
type FragmentSelf328 = NonNullable<FragmentResult328>;

export type FragmentToken328 =
  | FragmentSelf328["__typename"]
  | FragmentSelf328["typenameHint"] | FragmentToken326 | FragmentToken327;
